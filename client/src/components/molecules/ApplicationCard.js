import React, { useState } from 'react';
import { Wrapper, Buttons } from './OfferCard';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import TextDialog from './TextDialog';

const ApplicationCard = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <TextDialog data={data} open={open} setOpen={setOpen} />
      <Text>{data.user.name}</Text>
      <Text color="gray">{data.offer.name}</Text>
      <Buttons>
        {data.desc && (
          <Button size="small" bg="purpleDark" onClick={() => setOpen(true)}>
            More
          </Button>
        )}
        <Button size="small" bg="purpleLight">
          Accept
        </Button>
        <Button size="small" bg="error">
          Decline
        </Button>
      </Buttons>
    </Wrapper>
  );
};

export default ApplicationCard;
