import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const { t } = useTranslation();

  const onIncrement = () => {
    dispatch(counterActions.increment());
  };

  const onDecrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">
        {t("значение")}: {counterValue}
      </h1>
      <Button
        data-testid="increment-btn"
        onClick={onIncrement}
      >
        {t("Увеличить")}
      </Button>
      <Button
        data-testid="decrement-btn"
        onClick={onDecrement}
      >
        {t("Уменьшить")}
      </Button>
    </div>
  );
};
