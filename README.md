# **EASY COMBO BOX**

A simple and easy ComboBox component for React 

# **QuickStart**

### Props:

```typescript
  data: string[];
  inputClassName?: string;
  listItemClassName?: string;
  listWrapperClassName?: string;
  onClick: (value: string) => void;
  placeholder?: string;
```

+ data: A string array that represents the data that will be shown inside the ComboBox.

+ inputClassName: A string className for the input element in the ComboBox.

+ listItemClassName: A string className for each item on the data list.

+ listWrapperClassName: A string className for the wrapper of each data item.

+ onClick: A function that receives another function and executes when a item is clicked. This prop passes the data value clicked.

+ placeholder: A placeholder for the input in the ComboBox.