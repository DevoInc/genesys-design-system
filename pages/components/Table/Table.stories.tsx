import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, Menu, Popover } from '@devoinc/genesys-ui';
import { GIEyeViewFilled, GIPencilEdit } from '@devoinc/genesys-icons';
import { Holo } from '@devoinc/holo';
import { BasicTable } from '@devoinc/genesys-ui-table';

BasicTable.displayName = 'Table';
const meta: Meta<React.ComponentProps<typeof BasicTable>> = {
  title: 'Components/Table',
  component: BasicTable,
  argTypes: {
    data: {
      table: {
        disable: true,
      },
    },
    colDefs: {
      table: {
        disable: true,
      },
    },
    defaultColDef: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof BasicTable>>;

export const Example: Story = {
  args: {
    defaultColDef: {
      editable: false,
    },
    maxHeight: '80vh',
    minWidth: 2800,
    rowHeight: 36,
    resizableColumns: true,
    highlightColumnsOnHover: true,
    showFilters: true,
    colDefs: [
      {
        id: 'id',
        preset: 'text',
        headerName: 'ID',
      },
      {
        id: 'menu',
        headerName: 'Menu',
        cellRenderer: ({ colDef }) => {
          return (
            <Popover id="custom-col-menu">
              {({ toggle, ref, isOpened }) => (
                <Button
                  aria-expanded={isOpened}
                  aria-haspopup={true}
                  onClick={toggle}
                  ref={ref}
                >
                  Actions
                </Button>
              )}
              <Popover.Panel>
                <Menu>
                  <Menu.Item
                    label="Option 1"
                    onClick={() => {
                      // eslint-disable-next-line no-console
                      console.log(colDef);
                    }}
                  />
                </Menu>
              </Popover.Panel>
            </Popover>
          );
        },
      },
      {
        id: 'booleanValue',
        headerName: 'Boolean value',
        preset: 'boolean',
        editable: true,
      },
      {
        id: 'name',
        headerName: 'Name',
        preset: 'text',
        editable: true,
      },
      {
        id: 'age',
        headerName: 'Age',
        preset: 'number',
        editable: true,
      },
      {
        id: 'company',
        headerName: 'Company',
        preset: 'text',
      },
      {
        id: 'balance',
        headerName: 'Balance',
        preset: 'number',
      },
      {
        id: 'status',
        headerName: 'Status',
        preset: 'options',
        editable: true,
        context: {
          options: {
            done: { colorScheme: 'success' },
            test: { colorScheme: 'warning' },
            TODO: { colorScheme: 'data-purple' },
            inProgress: { colorScheme: 'data-blue' },
          },
        },
      },
      {
        id: 'picture',
        headerName: 'Image (URL)',
        preset: 'link',
      },
      {
        id: 'timestamp',
        headerName: 'Date',
        preset: 'date',
        editable: true,
      },
      {
        id: 'tags',
        headerName: 'Tags',
        preset: 'options',
        editable: true,
        context: {
          options: {
            Coworker: { colorScheme: 'success' },
            Developer: { colorScheme: 'data-magenta' },
            Engineer: { colorScheme: 'data-purple' },
            Components: { colorScheme: 'data-blue' },
          },
        },
      },
      {
        id: 'profession',
        headerName: 'Profession',
        preset: 'text',
      },
      {
        id: 'email',
        headerName: 'Email',
        preset: 'link',
      },
      {
        id: 'quote',
        headerName: 'Favourite quote',
        preset: 'text',
      },
      {
        id: 'address',
        headerName: 'Address',
        preset: 'text',
      },
      {
        id: 'website',
        headerName: 'Website',
        preset: 'link',
      },
      {
        id: 'secondaryWebsite',
        headerName: 'Secondary Website',
        preset: 'link',
      },
      {
        id: 'actions',
        preset: 'actions',
        context: {
          quickActions: [
            {
              Icon: <GIEyeViewFilled />,
              onClick: (rowIndex) => {
                // eslint-disable-next-line no-console
                console.log(`Action 1 on row ${rowIndex}`);
              },
            },
            {
              Icon: <GIPencilEdit />,
              onClick: (rowIndex) => {
                // eslint-disable-next-line no-console
                console.log(`Action 2 on row ${rowIndex}`);
              },
            },
          ],
        },
      },
    ],
    data: Holo.of()
      .addType('index', (args = {}) => args.index + 1)
      .schema({
        id: 'index',
        menu: 'bool',
        booleanValue: 'bool',
        name: 'name',
        age: 'age',
        company: 'company',
        balance: 'euro',
        status: () =>
          Holo.chance.pickone(['TODO', 'inProgress', 'test', 'done']),
        picture: 'avatar',
        timestamp: 'timestamp',
        tags: () =>
          Holo.chance.pickset(
            ['Coworker', 'Developer', 'Engineer', 'Components'],
            Holo.chance.integer({ min: 1, max: 4 }),
          ),
        profession: 'profession',
        email: 'email',
        quote: 'sentence',
        IP6: 'ipv6',
        address: 'address',
        website: 'url',
        secondaryWebsite: 'url',
      })
      .repeat(200)
      .generate(),
  },
  tags: ['isHidden'],
};
