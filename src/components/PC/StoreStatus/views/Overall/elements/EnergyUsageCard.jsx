import { LineChartWithLegend } from "../../../../../common/charts/LineChartWithLegend";
import { ItemCardTemplate } from "../../../common/ItemCardTemplate";

export const EnergyUsageCard = () => {
    return (
        <ItemCardTemplate title={"전력 사용량"}>
            <LineChartWithLegend legendWidth={0} />
        </ItemCardTemplate>
    );
};
