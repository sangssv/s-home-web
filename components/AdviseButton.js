import { useRouter } from 'next/router'
import { Button } from 'antd';

export default () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/lien-he');
  }

  return (
    <div className="center">
      <Button onClick={handleClick}>Tư vấn</Button>
    </div>
  )
}