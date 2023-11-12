---
to: src/components/<%=section%>/<%= h.changeCase.pascal(name) %>.stories.ts
---
import type { Meta, StoryObj } from '@storybook/vue3';
import <%= name %> from "./<%= name %>.vue";

const meta: Meta<typeof <%= h.changeCase.pascal(name) %>> = {
  component: <%= h.changeCase.pascal(name) %>,
  tags: ['autodocs'],
} satisfies Meta<typeof <%= h.changeCase.pascal(name) %>>;
export default meta;

type Story = StoryObj<typeof meta>;
export const <%= h.changeCase.pascal(name) %>Story: Story = {
  args: { },
};
