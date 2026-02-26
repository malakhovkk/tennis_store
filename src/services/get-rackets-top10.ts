import { BASE_API_URL } from "@/constants/service";
import { IRacket } from "@/utils/types.dto";
import { Response } from "@/utils/types.dto";

type Params = {
  page?: number;
  limit?: number;
};

export const getRacketsTop10 = async ({
  page = 1,
  limit = 10,
}: Params): Response<IRacket[]> => {
  const result = await fetch(`${BASE_API_URL}/top-10`);

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const products = await result.json();

  return { isError: false, data: products };
};
