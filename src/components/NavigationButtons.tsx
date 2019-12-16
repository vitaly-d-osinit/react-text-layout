import React, { useCallback, FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "next/link";

import {
  useNavigationList,
  useActiveNavigation,
  setActiveNavigationAction
} from "src/store/page";
import { Navigation } from "src/store/types";

const useStyles = makeStyles(theme => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

type NavigationButtonProps = {
  navigation: Navigation;
};

const NavigationButton: FunctionComponent<NavigationButtonProps> = ({
  navigation
}) => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const activeNavigation = useActiveNavigation();

  const handleClick = useCallback(() => {
    dispatch(setActiveNavigationAction(navigation.id));
  }, [dispatch, navigation]);

  return (
    <Link href={navigation.href} as={navigation.as}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        className={classes.button}
        disabled={navigation.id === activeNavigation}
      >
        {navigation.linkText}
      </Button>
    </Link>
  );
};

export default function NavigationButtons() {
  const navigationList = useNavigationList();
  const classes = useStyles({});

  return (
    <div className={classes.buttons}>
      {navigationList.map(navigation => (
        <NavigationButton navigation={navigation} key={navigation.linkText} />
      ))}
    </div>
  );
}
