import Content from './Content'
import MenuBlock from './MenuBlock'

const Main = ({ handleMenuClick, handleProjMenuActive, handleProjType, projMenuActive, projType, content }) => {
  return (
    <main className='d-flex flex-column align-items-start'>
      <Content
        handleProjMenuActive={handleProjMenuActive}
        handleProjType={handleProjType}
        projMenuActive={projMenuActive}
        projType={projType}
        contentType={content}
      />
      <div className='menu mt-auto d-flex justify-content-center'>
        <div className='w-75 row'>
          <MenuBlock handleMenuClick={handleMenuClick} btnType={'bio'} />
          <MenuBlock handleMenuClick={handleMenuClick} btnType={'proj'} />
          <MenuBlock handleMenuClick={handleMenuClick} btnType={'links'} />
        </div>
      </div>
    </main>
  )
}

export default Main