import { createFileRoute } from '@tanstack/react-router'
import Flag from "react-world-flags"

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Flag code="en" />
}
