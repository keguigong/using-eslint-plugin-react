/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import { Flex } from '../../../components/common'
import { MainContent } from '../../../components/widget'
import { LeftSider } from '.'

const Home = ({
  currentPage,
  deviceType,
  ...rest
}) => {
  return <Flex>
    <LeftSider {...{ deviceType, currentPage }} />
    <MainContent flex>
      <Styled.h1>日志信息</Styled.h1>
    </MainContent>
  </Flex>
}

Home.getInitialProps = ({ query: { deviceType } }) => {
  const currentPage = 'logs'
  return { deviceType, currentPage }
}

export default Home