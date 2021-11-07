import * as React from "react";
import { StyleContext } from "../contexts/StyleContext";

export default function Controls(props: any) {
  const style = React.useContext(StyleContext);

  const { controlButtonLabels } = props;
  const { showControlButtons } = props;

  const controlButtons = showControlButtons
    ? controlButtonLabels.map((control) => (
        <div
          onClick={control.onClick}
          key={control.title}
          className={`${style.consoleCtrl} ${style[control.title]}`}
        />
      ))
    : null;

  return <div className={style.controls}>{controlButtons}</div>;
}
