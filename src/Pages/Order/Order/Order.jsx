import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../../Components/Cover/Cover";

const Order = () => {
  return (
    <div>
      <Cover img={orderCover} title="Order Food"></Cover>
      <div role="tablist" className="tabs tabs-lifted">
        <a role="tab" className="tab">
          Tab 1
        </a>
        <a role="tab" className="tab tab-active">
          Tab 2
        </a>
        <a role="tab" className="tab">
          Tab 3
        </a>
      </div>
    </div>
  );
};

export default Order;
