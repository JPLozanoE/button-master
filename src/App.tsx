import { Sidebar } from "./Components/Sidebar"
import { ButtonPage } from "./Pages/ButtonPage"
import styled from "styled-components"

const Layout = styled.div`
  display: flex;`

export const App = () => {
  return (
    <Layout>
    <Sidebar/>
    <ButtonPage/>
    </Layout>
  )
}

