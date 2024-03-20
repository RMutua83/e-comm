import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"sk8teH2W3MmlzxAAyHBEJK9OfoZ0qe38LM4EcoemrZGzTw4Y9gYujtmBYB9EapoxXJjVA6ZsSxmvaB6vDQ7C6oVgpmbXeb4xJvmaQHbT2uBCpn0oPoAlt7FaI3NJFCb1GU7mcWzYD7t23r8X0hLnEnpFE2lCWdq8xDLC4RUT84yXVfb3qnit",

})
