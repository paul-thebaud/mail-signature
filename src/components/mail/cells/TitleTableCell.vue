<script
  lang="ts"
  setup
>
import { InputFile } from '../../../utils/fileToInputFile';
import TableBlock from '../TableBlock.vue';
import TableRow from '../TableRow.vue';
import TableCell from './../TableCell.vue';
import MultilineContent from './MultilineContent.vue';
import PaddingTableCell from './PaddingTableCell.vue';

type Props = {
  avatar?: InputFile
  firstName: string,
  lastName: string,
  title: string,
}

const props = defineProps<Props>();
</script>

<template>
  <table-cell>
    <table-block>
      <table-row>
        <template v-if="props.avatar">
          <table-cell width="42">
            <img
              :src="props.avatar.base64"
              alt=""
              width="42"
              height="42"
              style="max-width: 42px; max-height: 42px; border-radius: 50%; display: block;"
            >
          </table-cell>
          <padding-table-cell width="12" />
        </template>
        <table-cell>
          <p style="margin: 0px; color: rgb(0, 0, 0); font-size: 18px; line-height: 22px;">
            <strong>
              <span>{{ props.firstName }}</span>
              <span>&nbsp;</span>
              <span>{{ props.lastName }}</span>
            </strong>
          </p>
          <p style="margin: 0px; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;">
            <multiline-content :content="title" />
          </p>
        </table-cell>
      </table-row>
    </table-block>
  </table-cell>
</template>
