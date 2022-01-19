import React from 'react'
import Header from './Header'
import Search from './Search';

const COLUMN = `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
class Page extends React.Component {
  render() {
    const { children, enableHeroText, flex } = this.props
    return (
      <main className="main mb3">
          <Header enableHeroText={enableHeroText} />
          <div className="page">{children}</div>
          <Search />

        <style jsx>
          {`
            .main {
              ${flex ? COLUMN : ''}
              margin-top: 6rem;
            }
            .login-button-container {
              position: absolute;
              top: 1.4rem;
              right: 1rem;
            }
            @media (min-width: 1024px) {
              .main {
                ${COLUMN};
              }
            }
          `}
        </style>
      </main>
    )
  }
}

export default Page