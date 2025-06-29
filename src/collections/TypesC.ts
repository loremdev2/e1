import type {CollectionConfig} from "payload";

export const TypesC : CollectionConfig ={
    slug: "typesC",
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
        },
    ],
}