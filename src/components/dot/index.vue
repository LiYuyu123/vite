<template>
  <div class="dot">
    <div class="icon" :class="`${status}-device`"></div>
    <div class="label">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "dot",
  props: {
    status: {
      type: String,
      default: "active",
    },
  },
};
</script>

<style lang="scss">
.dot {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  font-size: 14px;

  .icon {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    position: relative;
    margin-right: 5px;
    border: 1px solid #015ee0;
    box-shadow: inset 0px 0px 4px 0px rgba(23, 137, 249, 0.5);
    &:before {
      position: absolute;
      left: 3px;
      top: 3px;
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #015ee0;
    }
  }
  .label {
    color: #7d7f8c;
  }
  .online-device {
    border: 1px solid #0eb463;
    box-shadow: inset 0px 0px 3px 0px rgba(14, 180, 99, 0.5);
    &:before {
      background: #0eb463;
    }
  }
  .activation-device {
    border: 1px solid #a027e6;
    box-shadow: inset 0px 0px 3px 0px rgba(160, 39, 230, 0.5);
    &:before {
      background: #a027e6;
    }
  }
  .Notonline-device {
    border: 1px solid rgba(135, 140, 170, 0.5);
    box-shadow: inset 0px 0px 3px 0px rgba(135, 140, 170, 0.5);
    &:before {
      background: rgba(135, 140, 170, 0.5);
    }
  }
}
</style>
