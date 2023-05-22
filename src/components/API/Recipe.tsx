import React, {useState} from 'react'
import { Box, TextField, Grid, Card, CardMedia, CardContent, Typography, Link } from '@mui/material'
import { RecipeStyle } from './Recipe.styled'
import { RecipeProps } from './Recipe.types'


function Recipe() {

  const [search, setSearch] = useState('')
  const [recipe, setRecipe] = useState([])

  const searchRecipe = (e: any) => {

    try {
      if (e.key == 'Enter') {
        fetch (`http://themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then (result => result.json())
        .then(data => {
          setRecipe(data.meals)
        })
    }} 
    catch (error) {
      console.error(error)
    }
}
 
  return (
    <RecipeStyle>
    <Box p={2} sx={{ marginTop:'75px', width: '100%', display: { xs: 'none', sm: 'block'}}}>
      <Grid container spacing={1}>
       <TextField
            label="Search recipe"
            size='small'
            color='primary'
            margin='normal'
            fullWidth
            sx={{minWidth: 300, justifyContent: 'center'}}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onKeyDown={searchRecipe}
            InputProps={{
            type: 'search',
            }}
        />
        {(recipe == null)
        ? <Typography gutterBottom variant='h5' component='div'>Recipe is not found</Typography> 
        : recipe.map((meal: RecipeProps, key: number) => 
          <Grid item xs={12} key={meal.idMeal}>
            <Card>
                <CardMedia component='img' image={meal.strMealThumb} alt='Recipe' height="190" />
                  <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                      {meal.strMeal}
                    </Typography>
                    <Typography gutterBottom variant='body1' component='div'>
                      Recipe:
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                      {meal.strInstructions}
                    </Typography>
                    <Link href={meal.strYoutube} underline="none"> Watch on Youtube </Link>
                  </CardContent>
            </Card>
          </Grid>  
        )}
      </Grid>
    </Box>
  </RecipeStyle>
  )
}

export default Recipe