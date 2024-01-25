import React from 'react';
import styled from 'styled-components';

import AdminTitle from 'components/Admin/AdminTitle';

import AdminTable from 'components/Admin/AdminTable';

const AdminPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 72px;
  padding-top: 72px;
  padding-bottom: 72px;
`;

const AdminTitleLayout = styled(AdminTitle)`
  display: flex;
  padding: 0 0 0 40px;
`;

const AdminTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AdminTableLayout = styled(AdminTable)`
  max-width: 720px;
`;

const AdminPage = () => {
  return (
    <div
        className='admin-page'
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
      }}
    >
      <AdminPageContainer>
        <AdminTitleLayout />
        <AdminTableWrapper>
          <AdminTableLayout />
        </AdminTableWrapper>
      </AdminPageContainer>
    </div>
  );
};

export default AdminPage;
