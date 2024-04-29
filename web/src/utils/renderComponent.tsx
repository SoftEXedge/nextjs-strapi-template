import PlaceHolder from "@/components/utils/PlaceHolder";
import HeroComponent from "@/components/utils/HeroComponent";

export type Component = { __component: string } | any;

export const renderComponent = (component: Component) => {
  switch (component.__component) {
    case "utils.place-holder":
      return <PlaceHolder component={component} />;

    case "utils.hero-component":
      return <HeroComponent component={component} />;

    default:
      break;
  }
};
