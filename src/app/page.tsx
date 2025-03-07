import { SettingTabs } from "@/components/SettingTabs";
import * as Input from "@/components/Input";
import { Bold, ChevronDown, Italic, Link, List, ListOrdered, Mail, } from "lucide-react";
import * as FileInput from "@/components/Form/FileInput";
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/Selectitem";
import { Textarea } from "@/components/Form/Textarea";
import { Button } from "@/components/Button";


export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">Settings</h1>
      <SettingTabs />
      
      <div className="mt-6 flex flex-col">

        <div className="flex flex-col items-center justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-start dark:border-zinc-700">
          
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Personal info</h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Update your photo personal details here.</span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant ="outline" type="button">
              Cancel
            </Button>

            <Button
              variant="primary"
              type="submit"
              form="settings">
              Save
            </Button>
        </div>
        </div>

        <form id="settings" className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700">
          <div className="lg:grid flex flex-col gap-3 lg:grid-cols-form">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid grid-cols-2">
              <Input.InputRoot>
                <Input.InputControl id="firstName" defaultValue="Kennedy" />
              </Input.InputRoot>
              
              <div className="flex flex-col gap-3 lg:block">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-zinc-700 lg:sr-only dark:text-zinc-300">
              Last name
            </label>

              <Input.InputRoot>
                <Input.InputControl id="lastName" defaultValue="Sena" />
              </Input.InputRoot>
            </div>
            </div>
            </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700">
              Email address
            </label>
            <Input.InputRoot>
              <Input.InputPrefix>
                <Mail className="h-4 w-4 text-zinc-500" strokeWidth={3} />
              </Input.InputPrefix>
                <Input.InputControl id="email" type="email" defaultValue="kennedysena.dev@gmail.com" />
              </Input.InputRoot>
          </div>

            <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="photo" 
              className="text-sm font-medium text-zinc-700">
              Your photo
            <span className="mt-0.4 block text-sm font-normal text-zinc-500">
              This will be displayed on your profile.
            </span>
            </label>
            <div >
              
          <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
          
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input.InputRoot>
              <Input.InputControl id="role" defaultValue="CTO" />
            </Input.InputRoot>
            <div>
            </div>
          </div>

            <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="country" className="text-sm font-medium text-zinc-700">
              Country
            </label>
            <div>
              <Select placeholder="Select a country">
                <SelectItem value="br" text="Brazil" />
                <SelectItem value="us" text="United States" />
                <SelectItem value="de" text="Germany" />
            </Select>
            </div>
          </div>

            <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="Timezone" className="text-sm font-medium text-zinc-700">
              Timezone
            </label>
            <div>
                <Select placeholder="Select a timezone">
                <SelectItem value="utc8" text="Pacific Standard Time (UTC-08:00)" />
                <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
            </Select>
            </div>
          </div>

          
            <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
            <span className="mt-0.4 block text-sm font-normal text-zinc-500">
              Write a short introduction.
            </span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select placeholder="Select a country" defaultValue="normal">
                <SelectItem value="normal" defaultChecked text="normal" />
                <SelectItem value="md" text="Markdown" />
                </Select>
                <div className="flex items-center gap-1">
                  <Button
                    type="button"
                    variant="ghost"
                  >
                    <Bold className="h4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                  >
                    <Italic className="4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                  >
                    <Link className="4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                  >
                    <List className="4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                    <Button
                    type="button"
                    variant="ghost"
                    >
                    <ListOrdered className="4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue="I´m Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>
          

            <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="projects" className="text-sm font-medium text-zinc-700">
              Portfolio projects
            <span className="mt-0.4 block text-sm font-normal text-zinc-500">
              Share a few snippets of your work.
            </span>
            </label>
            <div>
            <FileInput.Root>
                <FileInput.Trigger />
                <FileInput.FileList/>
            <FileInput.Control multiple/>
          </FileInput.Root>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-4">
            <Button variant ="outline" type="button">
              Cancel
            </Button>

            <Button
              variant="primary"
              type="submit"
              form="settings">
              Save
            </Button>
          </div>
        </form>
        </div>
    </>
  );
}
