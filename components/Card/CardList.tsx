import { lastSaleListMockData, menuItemMockData, menuListMockData } from "./Card.mock";
import Card from "./Card";

function CardList() {
  return (
    <div>
      {lastSaleListMockData.map(item => (
        <Card type="lastSaleItem" key={item.id} data={item} />
      ))}
      {menuListMockData.map(item => (
        <Card type="menuListItem" key={item.id} data={item} />
      ))}
      <Card type="menuDetailItem" data={menuItemMockData} />
    </div>
  );
}

export default CardList;
