import React from 'react'
import Grid from '@salesforce/design-system-react/components/grid';
import ModelForm from '../Components/Forms/ModelForm'
import TopMenu from '../Components/TopNavigationBar/TopMenu'
import VerticalMenu from '../Components/VerticalNavigationBar/VerticalMenu'
export default function Dashboard() {
    return (
        <div>
            <div>
                <TopMenu />
                <Grid>
                <Grid.Column>
                    <VerticalMenu/>
                </Grid.Column>
                <Grid.Column>
                    <div className="content">
                    <ModelForm/>
                    </div>
                </Grid.Column>
                </Grid>
            </div>            
        </div>
    )
}
