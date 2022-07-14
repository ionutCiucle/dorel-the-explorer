import React, { useEffect } from "react";
import NavigationTree from "../../components/NavigationTree";
import { useAppDispatch } from "../../state-management/hooks";
import { fetchNavigationItems } from "../../state-management/item-explorer/thunks";
import { useAppSelector } from "../../state-management/hooks";
import "./AppContainer.scss";

export const AppContainer = () => {
  const dispatch = useAppDispatch();
  const navigationItems = useAppSelector(
    (state) => state.navigationItems.items
  );

  useEffect(() => {
    dispatch(fetchNavigationItems());
  }, [dispatch]);

  return (
    <div className="dtx__app-container">
      <header>Welcome to Dorel's File Exploring App!</header>
      <section className="dtx__app-container__body">
        <nav>
          <NavigationTree items={navigationItems} title="Basket explorer" />
        </nav>
        <aside>Hello again</aside>
      </section>
    </div>
  );
};

export default AppContainer;
