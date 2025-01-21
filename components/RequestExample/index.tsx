import { Tab, TabPanel, Tabs } from "@smartbills/react";
import React, { PropsWithChildren } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { SiCsharp, SiJavascript, SiTypescript } from "react-icons/si";

export interface RequestExampleProps {
    language?: string;
    code?: string;
}

export interface RequestExamplesProps {
    examples?: RequestExampleProps[];
}


export function getLabelFromLanguageName(language: string) {

    switch (language) {
        case "typescript":
            return ({
                label: "Javascript",
                icon: <SiJavascript size={18}></SiJavascript>
            });
        case "csharp":
            return ({
                label: "C#",
                icon: <SiCsharp size={18}></SiCsharp>
            })
    }
}


export function RequestExamples({ examples = [] }: RequestExamplesProps) {
    return (
        <Tabs tabs={examples.map((example) => ({
            id: example.language,
            ...getLabelFromLanguageName(example.language),
        }))} activeTab={0} onChange={(tab, id) => {
        }}>
            {examples?.map((example, index) => (
                <TabPanel key={index} index={index} id={"general"}>
                    <SyntaxHighlighter language={example.language} style={vscDarkPlus} wrapLines={true} wrapLongLines={true}
                        customStyle={{
                            fontSize: 12,
                            borderRadius: 10, tabSize: 4, padding: 20, fontWeight: 500,
                            maxHeight: 500, maxWidth: "100%", 
                        }}>{example.code}</SyntaxHighlighter>
                </TabPanel>
            ))}
        </Tabs>
    )
}