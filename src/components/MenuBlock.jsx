import { Trans } from 'react-i18next'

const MenuBlock = ({ handleMenuClick, btnType }) => {
  return (
    <div
      className='menuBlock col d-flex'
      onClick={() => handleMenuClick(btnType)}
    >
      <span className='align-self-center'>
        <Trans i18nKey={btnType + 'Btn'} />
      </span>
    </div>
  )
}

export default MenuBlock