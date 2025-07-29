export default function Cart({ productCount }) {
  return (
      <div className="indicator">
        {productCount?.length > 0 && (
            <span className="indicator-item indicator-bottom indicator-start badge badge-secondary">
          {productCount.length}
        </span>
        )}
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">
          Cart
        </label>
      </div>
  );
}
