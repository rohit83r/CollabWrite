"use client";

import {
    BoldIcon, ChevronDownIcon,
    ItalicIcon, ListTodoIcon,
    LucideIcon, MessageSquarePlusIcon,
    PrinterIcon,
    Redo2Icon, RemoveFormattingIcon,
    SpellCheck2Icon,
    UnderlineIcon,
    Undo2Icon
} from "lucide-react";
import {cn} from '@/lib/utils'
import { useEditorState } from "@/store/use-editor-store";
import {Separator} from "@/components/ui/separator";
import {
    DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger

} from "@/components/ui/dropdown-menu"

const FontFamilyButton =()=>{
    const {editor}=useEditorState();
    const fonts=[
        {label:"Arial",value:"Arial"},
        {label:"Times New Roman",value:"Times New Roman"},
        {label:"Courier New",value:"Courier New"},
        {label:"Georgia",value:"Georgia"},
        {label:"Verdana",value:"Verdana"}
    ];
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                className="h-7 w-[120px] shrink-0 flex items-center justify-between rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm"   >
                    <span className="truncate">
                        {editor?.getAttributes("textStyle").fontFamily || "Arial"}
                    </span>
                    <ChevronDownIcon className="ml-2 size-4 shrink-0"></ChevronDownIcon>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
                {fonts.map(({ label,value})=>(
                    <button
                        onClick={()=> editor?.chain().focus().setFontFamily(value).run()}
                        key={value}
                        className={cn(
                        "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80 ",
                        editor?.getAttributes("textStyle").fontFamily === value && "bg-neutral-200/80"
                    )}
                            style={{ fontFamily:value }}
                    >
                        <span className="text-sm">{label}</span>
                    </button>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

interface ToolbarButtonProps{
    onClick?: () => void;
    isActive?: boolean;
    icon:LucideIcon
}

const ToolbarButton=({onClick,isActive,icon:Icon}:ToolbarButtonProps)=>{
    return (
        <button
        onClick={onClick}
        className={cn(
            "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
            isActive && "bg-neutral-200/80"
        )}

        >
            <Icon className="size-4" />
        </button>
    )
}

export const Toolbar=()=>{
    const {editor} = useEditorState();
    console.log("Toolbar editor:",{editor});
    const sections:{
        label:string;
        icon:LucideIcon;
        onClick: () => void;
        isActive?:boolean;
    }[][]=[
        [
            {
                label:"Undo",
                icon:Undo2Icon,
                onClick:()=>editor?.chain().focus().undo().run(),
            },
            {
                label:"Redo",
                icon:Redo2Icon,
                onClick:()=>editor?.chain().focus().redo().run(),
            },
            {
                label:"Print",
                icon:PrinterIcon,
                onClick:()=>window.print(),
            },
            {
                label:"Spell Check",
                icon:SpellCheck2Icon,
                onClick:()=>{
                    const current=editor?.view.dom.getAttribute(("spellCheck"));
                    editor?.view.dom.setAttribute("spellCheck",current==="false" ? "true" : "false");
                }
            }
        ],[
            {
                label:"Bool",
                icon:BoldIcon,
                isActive:editor?.isActive("bold"),
                onClick:()=>editor?.chain().focus().toggleBold().run(),
            },
            {
                label:"Italic",
                icon:ItalicIcon,
                isActive:editor?.isActive("italic"),
                onClick:()=>editor?.chain().focus().toggleItalic().run(),
            },
            {
                label:"Underline",
                icon:UnderlineIcon,
                isActive:editor?.isActive("underline"),
                onClick:()=>editor?.chain().focus().toggleUnderline().run(),
            },
        ],
        [
            { label:"Comment",
                icon:MessageSquarePlusIcon,
                isActive:false, //todo - enable
                onClick:()=>console.log("todo: comment"),
            },
            { label:"List Todo",
                icon:ListTodoIcon,
                isActive:editor?.isActive("taskList"),
                onClick:()=>editor?.chain().focus().toggleTaskList().run(),
            },
            { label:"Remove Formatting",
                icon:RemoveFormattingIcon,
                onClick:()=>editor?.chain().focus().unsetAllMarks().run(),
            },


        ]
    ];


    return(
        <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
            {sections[0].map((item)=>(
                <ToolbarButton key ={item.label} {...item}/>
            ))}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            <FontFamilyButton/>
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {/* TODO : Heading */}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {/* TODO : Font size*/}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {sections[1].map((item)=>(
                <ToolbarButton key ={item.label} {...item}/>
            ))}
            {/* TODO : text  color */}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {/* TODO : Highlight color */}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {/* TODO : Link */}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {/* TODO : Image */}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {/* TODO : Align */}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {/* TODO : Link height */}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {/* TODO : List */}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {sections[2].map((item)=>(
                <ToolbarButton key ={item.label} {...item}/>
            ))}
            {/* TODO : */}
        </div>
    )
};
