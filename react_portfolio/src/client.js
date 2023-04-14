import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "ulmzuwdt",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "sknLAZkkkIJBaioHfD0dK4lhwsHDjrZVmUubiAcPvxjTrn7sJEJxLqIOXAwXVOMiwAHvhFsNK1RVFgHMndCXSa88Xx0B4tbxngJaAMG8aM673IdJXXE1L00UHNcScmSEjhaNtAPxTx299KcNabnGeTCDYFIMzHwjb9FpJq66q3cTLuY3fZFY",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
