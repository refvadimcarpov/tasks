import * as React from "react";
import { number } from "prop-types";

export interface CalcProps {
  placeholder: string;
  label: string;
}

export interface CalcState {
    value: string;
    number: number;
    classNames: string
  }

export class Calc extends React.Component<CalcProps, CalcState> {
  constructor(props: CalcProps) {
    super(props);

    this.state = { value: "", number: NaN, classNames: "btn" };

    this.change = this.change.bind(this);
    this.trigger = this.trigger.bind(this);
  }
  change(event: any) {
    const target = event.target;
    this.setState({ value: target.value, number: NaN, classNames: "btn" });
  }
  trigger(event: any) {
    const inp = parseInt(this.state.value);
    const isNan = isNaN(inp);
    this.setState({
      value: isNan ? "" : this.state.value,
      number: inp,
      classNames: "btn" + (isNan ? " btn-danger" : "")
    });
  }
  render() {
    let numbers: { key: number; res: number }[] = [];
    let total = 0;
    
    for (let i = 1; i < 10; i++) {
      const res = i * this.state.number;
      total += res;
      numbers.push({ key: i, res });
    }
    
    const body = numbers.map(num => 
      <tr key={num.key.toString()}>
        <th className={"mul-" + num.key}>{num.key}</th>
        <td className={"res-" + num.key}>{ isNaN(num.res) ? "..." : num.res }</td>
      </tr>
    );

    return (
      <div>
        <div className="row">
          <div className="col-11">
            <input
              type="text"
              placeholder={this.props.placeholder}
              id="ctl"
              className="form-control"
              value={this.state.value}
              onChange={this.change} 
            />
          </div>
          <div className="col-1">
            <button
              id="btn"
              className={this.state.classNames}
              onClick={this.trigger}
            >
              {this.props.label}
            </button>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Multiplier</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>{body}</tbody>
              <tfoot>
                <tr>
                  <th>Total</th>
                  <td>{ isNaN(total) ? "..." : total }</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
