import { FormProps } from "./Form.props";
import styles from "./Form.module.scss";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import { InputComponent } from "../Input/Input";
import {
  SubmitHandler,
  useForm,
  Controller,
  FieldError,
} from "react-hook-form";
import { IForm, IFormResponse } from "./Form.interfaces";
import { useState } from "react";
import { routes } from "../../../routes";
import Link from "next/link";
import ButtonComponent from "../Button/Button";
import CountrySelect from "../CountrySelect/CountrySelect";
import { validatePhoneNumber } from "@/utils/validatePhoneNumber";
import { CountryCode } from "libphonenumber-js";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/utils/yupValidationForm";
import LargeGreenWeIcon from "../../../public/common/form/large_green_we.svg";
import LargeWhiteWeIcon from "../../../public/common/form/large_white_we.svg";

import PhoneInput from "react-phone-number-input";
import FormWe from "./FormWe/FormWe";

export const FormComponent = ({
  title,
  styleType,
  className,
  ...props
}: FormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>({
    resolver: yupResolver(schema),
  });
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isPhoneCorrect, setIsPhoneCorrect] = useState<FieldError | null>(null);
  const [country, setCountry] = useState<string>("UA");
  const { t } = useTranslation();

  const [value, setValue] = useState();

  const onSubmit: SubmitHandler<IForm> = async (formData: IForm) => {
    console.log(formData);
    const validatedNumber = validatePhoneNumber(
      String(formData.phone),
      country as CountryCode
    );
    console.log(validatedNumber);
    if (!validatedNumber) {
      setIsPhoneCorrect({
        type: "validation",
        message: "incorrect phone number",
      });
    } else {
      setIsPhoneCorrect(null);
    }
    //   try {
    //     const { data } = await axios.post<IReviewResponse>(process.env.NEXT_PUBLIC_DOMAIN + API.review.create, {...formData, productId});
    //     if(data.message) {
    //       setIsSuccess(true);
    //       reset();
    //     } else {
    //       setError("Что-то пошло не так");
    //     }
    //   } catch (error) {
    //     if(axios.isAxiosError(error)) {
    //       setError(error.message);
    //     } else {
    //       console.log(error);
    //     }
    //   }
  };

  const changeCountry = (country: string) => {
    setCountry(country);
    console.log(country);
  };

  return (
    <div className={cn(styles["container"])}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className={cn(styles["form"], className, {
            [styles["form__green"]]: styleType === "green",
            [styles["form__white"]]: styleType === "white",
          })}
          {...props}
        >
          <h2
            className={cn(styles["form__title"], {
              [styles["form__title-white"]]: styleType === "green",
              [styles["form__title-green"]]: styleType === "white",
            })}
          >
            {t(title)}
          </h2>

          <InputComponent
            type={"text"}
            {...register("name")}
            placeholder={t("form.name_placeholder")}
            className={styles["form__input"]}
            error={errors.name}
          />

          <InputComponent
            type={"text"}
            {...register("email")}
            placeholder={t("form.email_placeholder")}
            className={styles["form__input"]}
            error={errors.email}
          />

          <div className={cn(styles["form__phone-input"])}>
            <CountrySelect
              callback={changeCountry}
              className={styles["form__select"]}
            />
            <InputComponent
              type={"tel"}
              // onChange={(e) => handleValidatePhoneNumber(e)}
              {...register("phone")}
              className={styles["form__input-phone"]}
              error={errors.phone || isPhoneCorrect}
            />
          </div>

          <label className={cn(styles["form__checkbox-label"])}>
            <InputComponent
              className={styles["form__checkbox"]}
              type={"checkbox"}
            />
            <p className={cn(styles["form__checkbox-text"])}>
              <span className={cn(styles["form__text"])}>{`${t(
                "form.press_on_button"
              )} `}</span>
              <br />
              <Link
                className={cn(styles["form__link"], {
                  [styles["form__link-green"]]: styleType === "white",
                  [styles["form__link-white"]]: styleType === "green",
                })}
                href={routes.publicOffer}
              >
                {t("form.link_of_public_offer")}
              </Link>
              <span className={cn(styles["form__text"])}>{` ${t(
                "form.and"
              )} `}</span>
              <Link
                className={cn(styles["form__link"], {
                  [styles["form__link-green"]]: styleType === "white",
                  [styles["form__link-white"]]: styleType === "green",
                })}
                href={routes.privacyPolicy}
              >
                {t("form.link_of_privacy_policy")}
              </Link>
            </p>
          </label>

          <ButtonComponent
            type="submit"
            buttonType={styleType === "white" ? "green" : "white"}
            className={cn(styles["form__submit-button"])}
          >
            {t("form.main_submit_button")}
          </ButtonComponent>

          {/* <div className={styles.submit}>
          <Button tabIndex={isOpened ? 0 : -1} appearance="primary">Отправить</Button>
          <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div> */}

          <div className={styles["form__we-icon"]}>
            <FormWe iconStyle={styleType} />
          </div>

        </div>

        {/* {isSuccess && (
        <div className={styles.success}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо, ваш отзыв будет опубликован после проверки</div>
          <CloseIcon onClick={() => setIsSuccess(false)} className={styles.close} />
        </div>
      )}
      {error && (
        <div className={styles.error}>
          {error}
          <CloseIcon onClick={() => setError('')} className={styles.close} />
        </div>
      )} */}
      </form>
    </div>
  );
};
