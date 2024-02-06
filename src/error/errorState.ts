import { PAYMENT_METHOD } from "@/common/enum";
import { Query } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const queryCacheOnError = (err: unknown, query: Query) => {
  switch (query.meta?.errorMessage) {
    case PAYMENT_METHOD.POSTS_FETCH_FAILED:
      console.log("HERIE");
      return toast.error("Could not fetch posts");
    default:
      return toast.error("Something went wrong");
  }
};
