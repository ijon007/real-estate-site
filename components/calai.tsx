'use client'

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useI18n } from "./i18n-provider";
import { Button } from "./ui/button";

function CalAIWidget() {
  const { t } = useI18n()
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  return (
    <Button 
      data-cal-namespace="30min"
      data-cal-link="core-point-dev/30min"
      className="w-full py-5 px-6 rounded-full text-center bg-white text-primary hover:bg-white/90"
      data-cal-config='{"layout":"month_view","theme":"light"}'
    >
      {t("common.buttons.scheduleConsultation")}
    </Button>
  );
}

export default CalAIWidget;