import CardList from "@/components/Card/CardList";
import Grid from "@/components/Grid/Grid";
import { brandMockData, categoryMockData } from "@/components/Grid/Grid.mock";

function HomePage() {
  return (
    <div>
      <Grid data={categoryMockData} type="category" />
      <Grid data={brandMockData} type="brand" />
      <CardList />
    </div>
  );
}

export default HomePage;
