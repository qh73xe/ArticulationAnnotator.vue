import type { Meta, StoryObj } from '@storybook/vue3';
import videoFile from '../../../misc/sample1.mp4';
import AVideo from "./AVideo.vue";

const meta: Meta<typeof AVideo> = {
  component: AVideo,
  argTypes: { 
    onLoaded: {action: 'onLoaded'},
    onAudioprocess: {action: 'onAudioprocess'},
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AVideo>;
export default meta;

type Story = StoryObj<typeof meta>;
export const AVideoStory: Story = { 
  args: { 
    src: videoFile,
    tabIndex: 0,
    width: 256,
    height: 256,
    controls: true,
  }
};
