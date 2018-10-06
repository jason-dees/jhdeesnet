
import React, { Component } from 'react';
import Section from '../Section.js';
import RecipeCategoryTable from '../Recipes/RecipeCategoryTable';

class Recipes extends Component{
    render() {
        return (
            <Section>
                <RecipeCategoryTable />
            </Section>
        );
    }
}

export default Recipes;