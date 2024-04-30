import React from "react";
import * as S from "./buttonTemplate.styles";

const ButtonTemplate = () => {
  return (
    <>
      {/* <S.MainTemplate stateTheme={operStat} loading={loading}>
        <Header
          f7route={f7route}
          f7router={f7router}
          // operStat={operStat}
          pageTit={
            MenuData.filter((cur) => cur.url === f7route.path)[0]
              ? MenuData.filter((cur) => cur.url === f7route.path)[0].menuName
              : ""
          }
          handleMenuOpen={handleMenuOpen}
          menuOpen={menuOpen}
        />
        <S.MainContentSection>
          {loading === true && <LoadingSpinner />}
          {children}
        </S.MainContentSection>
      </S.MainTemplate>
      <Menu
        menuRef={menuRef}
        f7route={f7route}
        f7router={f7router}
        menuOpen={menuOpen}
        menuOutsideClick={menuOutsideClick}
      /> */}
    </>
  );
};

export default ButtonTemplate;
