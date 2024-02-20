import { apiSlice } from "./apiSlice";

export const templateApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchTemplate: builder.query({
      query: () => "/contact-information",
      // validateStatus: (response, result) => {
      //   return response.status === 200 && !result.isError;
      // },
      transformResponse: (response) => response?.data[0],
    }),
    addTemplate: builder.mutation({
      query: (ContactData) => ({
        url: "/contact-us",
        method: "POST",
        body: ContactData,
      }),
    }),
  }),
});

export const { useFetchTemplateQuery, useAddTemplateMutation } =
  templateApiSlice;
