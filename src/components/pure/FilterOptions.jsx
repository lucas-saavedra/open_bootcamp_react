import React from 'react'
import PropTypes from 'prop-types'
import FilterContainer from '../containers/FilterContainer'

const FilterOptions = () => {
    return (
        <div className='filters'>
            <FilterContainer filter='SHOW_ALL'>
                All
            </FilterContainer>
            <FilterContainer filter='SHOW_COMPLETED'>
                Completed
            </FilterContainer>
            <FilterContainer filter='SHOW_ACTIVE'>
                Active
            </FilterContainer>
        </div>
    )
}

FilterOptions.propTypes = {}

export default FilterOptions