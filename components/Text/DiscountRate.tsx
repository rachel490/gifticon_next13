import { useTheme } from "styled-components";
import Text from "./Text";

interface IProps {
  original: number;
  discounted: number;
}

function DiscountRate({ original, discounted }: IProps) {
  const { color } = useTheme();

  const generateDiscountRate = () => {
    const difference = original - discounted;
    return ((difference / original) * 100).toFixed(1);
  };

  return (
    <Text size={16} color={color.primary}>
      {`${generateDiscountRate()}%`}
    </Text>
  );
}

export default DiscountRate;
