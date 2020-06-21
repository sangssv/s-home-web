import React from 'react';
import { Card } from 'antd';
import Link from 'next/link';

import { getImageUrl } from '../utils/image-url';

const { Meta } = Card;

export default ({ title, description, image, linkTo }) => {
  return (
    <Link href={linkTo}>
      <Card
        className="card"
        hoverable
        cover={
          <img
            style={{
              height: 300
            }}
            alt={title}
            src={getImageUrl(image)}
          />
        }
      >
        <Meta
          className="card-meta"
          title={title}
          description={description}
        />
      </Card>
    </Link>
  );
}