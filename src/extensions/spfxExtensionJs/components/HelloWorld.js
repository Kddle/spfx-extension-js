import React from 'react';
import { CommandBar } from 'office-ui-fabric-react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ms-bgColor-themeDark ms-fontColor-white">
                <CommandBar items={this.getItems()} />
            </div>
        )
    }

    getItems() {
        return [
            {
                key: 'share',
                text: 'My Custom Share',
                iconProps: { iconName: 'Share' },
                onClick: () => console.log('Custom Share Button Clicked !')
            },
            {
                key: 'download',
                text: 'My Custom Download',
                iconProps: { iconName: 'Download' },
                onClick: () => console.log('Custom Download Button Clicked !')
            }
        ]
    }
}

export default HelloWorld;