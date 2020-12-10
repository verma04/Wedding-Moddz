import React, { Component } from 'react'
import { Section } from './Style'

export default class Top extends Component {
    render() {
        return (
            <Section>
                <div className='flex' >
                <i  onClick={() => window.scrollTo(0, 0)} class="fas fa-angle-up"></i>

                </div>
            </Section>
        )
    }
}
