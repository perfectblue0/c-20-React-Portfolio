import React from "react";
import Navtabs from "./NavTabs";

function Header(props) {
  const { currentPage, handlePageChange } = props;

  return (
    <div>
      <section>
        <header>
          <div className="mainName">
            <h1>Giselle Lupercio</h1>
          </div>
          <div>
            <div className="message">
              <p>Let's create something together</p>
            </div>
            <Navtabs
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            ></Navtabs>
          </div>
        </header>
      </section>
    </div>
  );
}

export default Header;
