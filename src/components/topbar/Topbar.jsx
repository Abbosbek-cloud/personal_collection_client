import { CallOutlined, ExpandMore, MailOutline } from "@mui/icons-material";
import { Container, MenuItem, styled } from "@mui/material";
import TouchRipple from "@mui/material/ButtonBase";
import { FlexBox } from "../flex-box";
import NavLink from "../nav-link/NavLink";
import { Span } from "../Typography";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import GeneralImage, { TopbarWrapper } from "../styled/Components";
import GeneralMenu from "../MenuComp";

const Topbar = () => {
  const [currency, setCurrency] = useState(currencyList[0]);
  const [language, setLanguage] = useState(languageList[0]);

  const handleCurrencyClick = (curr) => () => setCurrency(curr);

  const handleLanguageClick = (lang) => () => setLanguage(lang);

  useEffect(() => {
    // get language from browser
    // console.log(navigator.language);
  }, []);

  return (
    <TopbarWrapper>
      <Container
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FlexBox className="topbarLeft" alignItems="center">
          <div className="logo">
            <Link to="/">
              <GeneralImage
                display="block"
                height="28px"
                src="/assets/images/logo.svg"
                alt="logo"
              />
            </Link>
          </div>

          <FlexBox alignItems="center">
            <CallOutlined fontSize="small" />
            <Span className="title">+88012 3456 7894</Span>
          </FlexBox>

          <FlexBox alignItems="center" ml={2.5}>
            <MailOutline fontSize="small" />
            <Span className="title">support@ui-lib.com</Span>
          </FlexBox>
        </FlexBox>

        <FlexBox className="topbarRight" alignItems="center">
          <NavLink className="link" href="/faq">
            Theme FAQ&quot;s
          </NavLink>

          <NavLink className="link" href="/help">
            Need Help?
          </NavLink>

          <GeneralMenu
            handler={
              <TouchRipple className="handler marginRight">
                <Span className="menuTitle">{language.title}</Span>
                <ExpandMore fontSize="inherit" />
              </TouchRipple>
            }
          >
            {languageList.map((item) => (
              <MenuItem
                className="menuItem"
                key={item.title}
                onClick={handleLanguageClick(item)}
              >
                <Span className="menuTitle">{item.title}</Span>
              </MenuItem>
            ))}
          </GeneralMenu>

          <GeneralMenu
            direction="right"
            handler={
              <TouchRipple className="handler">
                <Span className="menuTitle">{currency.title}</Span>
                <ExpandMore fontSize="inherit" />
              </TouchRipple>
            }
          >
            {currencyList.map((item) => (
              <MenuItem
                className="menuItem"
                key={item.title}
                onClick={handleCurrencyClick(item)}
              >
                <Span className="menuTitle">{item.title}</Span>
              </MenuItem>
            ))}
          </GeneralMenu>
        </FlexBox>
      </Container>
    </TopbarWrapper>
  );
};

const languageList = [
  {
    title: "EN",
    imgUrl: "/assets/images/flags/usa.png",
  },
  {
    title: "BN",
    imgUrl: "/assets/images/flags/bd.png",
  },
  {
    title: "HN",
    imgUrl: "/assets/images/flags/in.png",
  },
];
const currencyList = [
  {
    title: "USD",
    imgUrl: "/assets/images/flags/usa.png",
  },
  {
    title: "EUR",
    imgUrl: "/assets/images/flags/uk.png",
  },
  {
    title: "BDT",
    imgUrl: "/assets/images/flags/bd.png",
  },
  {
    title: "INR",
    imgUrl: "/assets/images/flags/in.png",
  },
];
export default Topbar;
