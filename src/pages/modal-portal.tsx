import { useState } from "react"
import styled from "styled-components"
import { ModalPortal } from "../components/core/ModalPortal"
import { Header } from "../components/templates/Header"

export default function PageModalPortal({ ...props }) {
  const [isModal1Open, setIsModal1Open] = useState(false)
  const [isModal2Open, setIsModal2Open] = useState(false)

  return (
    <StyledPageModalPortal {...props} className="page">
      <Header />
      <h1>Modal Portal Component</h1>

      <Content>
        <button onClick={() => setIsModal1Open(true)}>Open modal 1</button>
        <button onClick={() => setIsModal2Open(true)}>Open modal 2</button>
      </Content>

      <ModalPortal
        isOpen={isModal1Open}
        onClose={() => setIsModal1Open(false)}
        position={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        content={
          <div
            style={{
              background: "red",
              padding: "5rem",
            }}
          >
            <button onClick={() => setIsModal2Open(true)}>Open modal 2</button>
          </div>
        }
      />
      <ModalPortal
        isOpen={isModal2Open}
        onClose={() => setIsModal2Open(false)}
        position={{
          top: 0,
          left: 0,
        }}
        content={
          <div
            style={{
              background: "blue",
              padding: "5rem",
            }}
          >
            <button onClick={() => setIsModal1Open(true)}>Open modal 1</button>
          </div>
        }
      />
    </StyledPageModalPortal>
  )
}

const StyledPageModalPortal = styled.div``

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`