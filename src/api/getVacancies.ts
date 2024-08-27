import { supabase } from "@/utils/client";

export const getVacancies = async () => {
  const { data } = await supabase.from("Vacancies").select("*");

  return data;
};
