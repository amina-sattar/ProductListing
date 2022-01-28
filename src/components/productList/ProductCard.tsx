import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Article } from '../../types';
import { formatter } from '../../utils';

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent:'space-between' }}>
      <CardMedia
        component="img"
        height="200"
        width="200"
        src={article.images[0].path}
        alt=""
      />
      <CardContent sx={{p:"4px"}}>
        <Typography variant="body1" color="text.secondary" textAlign="center">
          {article.name}
        </Typography>
        <Typography variant="subtitle1"  textAlign="center">
          {formatter.format(article.prices.regular.value / 100)}
        </Typography>
      </CardContent>
      <CardActions sx={{ p:'12px', pt:1 }}>
        <Button size="small" fullWidth sx={{backgroundColor:  'home24.main', color: 'home24.contrastText', ':hover': { backgroundColor: 'home24.light'}}}>Add to cart</Button>
      </CardActions>
    </Card>
  );
}
