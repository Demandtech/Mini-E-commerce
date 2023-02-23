import storeItems from '../data/items.json'
import { Col, Row } from 'react-bootstrap'
import { StoreItem } from '../components/StoreItem'

export const Store = () => {
  console.log(storeItems)
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} >
        {storeItems.map((item) => {
          return (
            <Col key={item.id} className=' mb-4'>
              <StoreItem {...item} />
            </Col>
          )
        })}
      </Row>
    </>
  )
}
