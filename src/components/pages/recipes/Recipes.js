// import Nav from './Nav.js'
// import NavItem from './NavItem.js'
// import List from './List.js'
// import ListItem from './ListItem.js'

import RecipeList from "./RecipeList"
import RecipeListItem from "./RecipeListItem"
import RecipeNavItem from "./RecipeNavItem"

const recipes = {
    id: 1,

}

const Recipes = ({ recipes }) => {
    return (
        <div className="divide-y divide-gray-100">
            <RecipeNav>
          <RecipeNavItem href="/featured" isActive>Featured</RecipeNavItem>
            <RecipeNavItem href="/popular">Popular</RecipeNavItem>
            <RecipeNavItem href="/recent">Recent</RecipeNavItem>
          </RecipeNav>

          <RecipeList>
          {recipes.map((recipe) => (
            <RecipeListItem key={recipe.id} recipe={recipe} />
          ))}
        </RecipeList>
      </div>
    )
}

export default Recipes
