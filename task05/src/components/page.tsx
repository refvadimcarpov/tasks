import * as React from "react";

import { Calc } from './calc'

export interface PageProps { title: string; }

export class Page extends React.Component<PageProps, {}> {
    render() {
        return <div>
            <h1 className="jumbotron-fluid">{this.props.title}</h1>
            <Calc label="Go!" placeholder="Enter integer number" />
        </div>
    }
}